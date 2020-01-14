properties([
	gitLabConnection('gitlab'),
	parameters([string(defaultValue: 'refs/heads/master', description: 'the branch to build', name: 'branch', trim: true)])
])

def runtests(dockerImageVersion)
{
    dir(dockerImageVersion){
        try {
			gitlabCommitStatus("checkout") {
				stage('checkout'){
					checkout([$class: 'GitSCM', branches: [[name: params.branch]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '361885ba-9425-4230-950e-0af201d90547', url: 'https://git.auckland.dynabic.com/assembly-cloud/assembly-node-sdk.git']]])
					withCredentials([usernamePassword(credentialsId: '6839cbe8-39fa-40c0-86ce-90706f0bae5d', passwordVariable: 'AppKey', usernameVariable: 'AppSid')]) {
						sh 'echo "{\\"AppSid\\": \\"$AppSid\\",\\"AppKey\\": \\"$AppKey\\"}" > testConfig.json'
					}
				}
			}
            
            docker.image('node:' + dockerImageVersion).inside{
				gitlabCommitStatus("build") {
					stage('build'){
						withEnv([
						/* Override the npm cache directory to avoid: EACCES: permission denied, mkdir '/.npm' */
						'npm_config_cache=npm-cache',
						/* set home to our current directory because other bower
						 * nonsense breaks with HOME=/, e.g.:
						 * EACCES: permission denied, mkdir '/.config'
						 */
						'HOME=.',
						]) {
							sh "npm install"
													
							sh "npm run gulp build"
							if (params.branch == 'refs/heads/master'){
								sh "npm run lint"
							}
						}
					}
				}
				
				gitlabCommitStatus("tests") {
					stage('tests'){   
						try {
							sh "npm run test-jenkins"
						} finally {
							junit 'reports/**.xml'
						}
					}
				}
            }        
        } finally {                       
            deleteDir()
			sh 'docker system prune -f'
        }
    }
}

node('words-linux') {        
    runtests("latest")   
}