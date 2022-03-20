pipeline {
    agent any 
    stages {
        stage('Download tests') {
            steps {
                git 'https://github.com/RamzesX/CypressBlog'
                
            }
        }
        stage("Install cypress") {
            steps {
                sh 'npm install cypress --save-dev'
                sh 'npm install --save-dev typescript'
                sh 'npm install --save-dev webpack typescript ts-loader'
                sh 'npm install --save-dev @cypress/webpack-preprocessor'
            }
        }
        stage("Run tests") {
                steps {
                    ansiColor('xterm') {
                        sh 'npx cypress run'
                    }
                }
        }
    }
}
