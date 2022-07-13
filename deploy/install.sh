# Preparing
sudo apt update
sudo apt install -y make curl htop git postgresql

# Get docker
curl -fsSL https://get.docker.com -o get-docker.sh
chmod +x get-docker.sh
sudo ./get-docker.sh
sudo usermod -aG docker $USER

# Get docker-compose
git clone https://github.com/docker/compose.git
cd compose/
sudo make
sudo cp bin/docker-compose /usr/local/bin/docker-compose

# Jenkins
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
	/usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
	https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
	/etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt-get update
sudo apt-get install -y fontconfig openjdk-11-jre jenkins
sudo usermod -a -G docker jenkins
sudo systemctl restart jenkins.service

# Clear
sudo rm -rf compose/
sudo rm get-docker.sh

# Check
docker -v
docker-compose -v
/usr/lib/postgresql/*/bin/postgres -V
grep version /var/lib/jenkins/config.xml
