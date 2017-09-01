
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 9229, host: 9229
  config.vm.network :forwarded_port, guest: 27017, host: 27017

  config.vm.synced_folder ".", "/home/vagrant"

  config.vm.provider :virtualbox do |v|
    v.customize ["modifyvm", :id, "--memory", 4096]
    v.customize ["modifyvm", :id, "--cpus", 2]
  end
  
  config.vm.provision :docker

  config.vm.provision :docker_compose, rebuild: true, run: "always", yml: "/home/vagrant/docker-compose.debug.yml"

  config.ssh.insert_key = false
end