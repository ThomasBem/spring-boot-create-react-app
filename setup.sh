#!/bin/bash
./gradlew -b setup.gradle -PprojectName="${PWD##*/}"
./gradlew
echo 'Deleting setup scripts'
rm Template.gif
rm setup.gradle
rm -- "$0"
echo ''
echo '############################'
echo '## Project setup complete ##'
echo '############################'
echo ''