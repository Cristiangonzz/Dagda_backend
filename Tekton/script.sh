#!bin/bash
# Agregar en variables todos los archivos

oc create secret generic dockerhub-secret \
    --from-literal=username='SofCristian' \
    --from-literal=password='camino17@' \
    --type=kubernetes.io/basic-auth

oc secrets link pipeline dockerhub-secret

oc apply -f ./PersistentVolumeClaim