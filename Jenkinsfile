pipeline {
    agent any

    environment {
        GITHUB_CREDENTIAL_ID = 'github-deploy-token'
        GITHUB_REPO_URL = 'https://github.com/makurea/simple-web-app.git'
        TARGET_BRANCH = 'main'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning the repository...'
                git branch: env.TARGET_BRANCH, url: env.GITHUB_REPO_URL
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    echo 'Preparing to push updated static content...'

                    withCredentials([string(credentialsId: env.GITHUB_CREDENTIAL_ID, variable: 'TOKEN')]) {

                        bat 'git config user.email "jenkins-ci@makurea.com"'
                        bat 'git config user.name "Jenkins CI Makurea"'
                        bat "git commit --allow-empty -m \"Jenkins Pages Deploy - Build #${env.BUILD_NUMBER}\""
                        bat "git push https://${TOKEN}@github.com/makurea/simple-web-app.git HEAD:${env.TARGET_BRANCH}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo "SUCCESS: The web app should now be available at https://makurea.github.io/simple-web-app/"
        }
        failure {
            echo 'FAILURE: Deployment failed. Check the logs.'
        }
    }
}