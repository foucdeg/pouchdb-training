IP = "192.168.44.44"
VM_NAME = "couch"
VM_MEMORY = 2048
VM_CPUS = 1
SYNCED_FOLDER_VM_PATH = "/var/www/couch"

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.provider :virtualbox do |v|
        v.name = VM_NAME
        v.customize [
            "modifyvm", :id,
            "--name", VM_NAME,
            "--memory", VM_MEMORY,
            "--natdnshostresolver1", "on",
            "--cpus", VM_CPUS,
        ]
    end

    config.vm.network "forwarded_port", guest: 5984, host: 5984
    config.vm.network "forwarded_port", guest: 8080, host: 8080

    config.vm.network :private_network, ip: IP
    config.ssh.forward_agent = true

    config.vm.synced_folder "./", SYNCED_FOLDER_VM_PATH, :nfs => true
end
