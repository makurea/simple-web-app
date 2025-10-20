pipeline {
    agent any

    // Определяем переменные окружения
    environment {
        // ID Credentials, который мы создали в Jenkins с токеном GitHub
        GITHUB_CREDENTIAL_ID = 'github-deploy-token'
        // URL вашего репозитория
        GITHUB_REPO_URL = 'https://github.com/makurea/simple-web-app.git'
        // Ветка, которую GitHub Pages использует для публикации
        TARGET_BRANCH = 'main'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning the repository...'
                // Клонируем код. Публичный репозиторий не требует credentialsId.
                git branch: env.TARGET_BRANCH, url: env.GITHUB_REPO_URL
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    echo 'Preparing to push updated static content...'

                    // Используем наш токен из Jenkins Credentials для аутентификации push
                    withCredentials([string(credentialsId: env.GITHUB_CREDENTIAL_ID, variable: 'TOKEN')]) {
                        // 1. Настройка Git для push
                        sh 'git config user.email "jenkins-ci@makurea.com"'
                        sh 'git config user.name "Jenkins CI Makurea"'

                        // 2. Создаем "пустой" коммит. Это гарантирует, что
                        // Git увидит, что ветка "изменилась" и push сработает,
                        // даже если файлы не менялись. Это триггер для GitHub Pages.
                        sh "git commit --allow-empty -m 'Jenkins Pages Deploy - Build #${env.BUILD_NUMBER}'"

                        // 3. Выполняем push с использованием токена
                        // Формат: https://ТОКЕН@github.com/ВАШ_РЕПО.git
                        sh "git push https://${TOKEN}@github.com/makurea/simple-web-app.git HEAD:${env.TARGET_BRANCH}"

                        echo 'Deployment push successful!'
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