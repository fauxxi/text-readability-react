if git checkout master && 
git fetch origin master &&   
[ `git rev-list HEAD...origin/master --count` != 0 ] &&
git merge origin/master 
then   
       	sudo rm -r /home/adminuser/tc/textcomplexityweb/services/landing/www/* &&
	mv build/* /home/adminuser/tc/textcomplexityweb/services/landing/www/ &&
	echo 'Updated'               
else          
	echo 'Not Updated'           
fi     
