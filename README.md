# nodemon-vagrant-docker-vscode
Debug node with vscode, nodemon, vagrant and docker

##  Reference
    https://github.com/bdspen/nodemon_vscode
    https://github.com/smebberson/docker-alpine
    https://github.com/leighmcculloch/vagrant-docker-compose
    https://www.vagrantup.com/docs/virtualbox/configuration.html
    https://www.vagrantup.com/docs/networking/
    https://github.com/remy/nodemon/
    https://www.vagrantup.com/docs/provisioning/docker.html

##  Commands

### Vagrant
    vagrant plugin install vagrant-docker-compose
    vagrant init
    vagrant up
    vagrant reload
    vagrant halt
    vagrant ssh
    * vagrant password = vagrant
    vagrant box remove vm
    vagrant box list
    vagrant box outdated
    vagrant box prune

### Docker
    docker run -it --rm node /bin/sh
    docker kill container
    docker restart container
    sudo docker exec -i -t container /bin/bash
    sudo docker exec -i -t container /bin/sh
    sudo docker exec -i -t id_container /bin/bash