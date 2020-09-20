pipeline {
    agent any

    stages {
        stage('Intall') {
            steps {
                npm install
            }
        }
        stage('Build') {
            steps {
                ioninc build --prod
            }
        }
        
    }
}
