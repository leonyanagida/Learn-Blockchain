Lottery System using the Ethereum Blockchain

Instructions:

. Install all the packages
. Make sure you install metamask for your browswer and set up your free account.
. When you create a metamask account, you are given a seed. Make sure you store and save a copy of it.
. Open deploy.js and paste your metamask seed (16 words) where it says "paste mnemonic here".

. Head over to https://infura.io/ and sign up for a free account.
. Open the email you used to register for infura and copy the "Test Ethereum Network (Rinkeby)" link.
. Open deploy.js and paste the infura test network link where it says "paste infura link here" .

. Open metamask, login and click on the top left corner to change to the "Rinkeby Test Network"
. Open node command prompt and navigate to the lottery folder
. Type "node deploy.js" into the command prompt (without the quotation marks)
. NOTE: Please do not close the node js command prompt yet.
NOTE: If you get an error when deploying the contract, it is most likely because of web3. In order to fix,
run "npm install web3" or "yarn add web3" in the node js command prompt.

. Go to http://remix.ethereum.org/
. Copy and paste the code in the Lottery.sol file located in the contracts folder onto the page
. Make sure you are logged into metamask and on the Rinkeby Test Network.
. Go back to the node js command prompt where you deployed your contract.
. Copy the address where it says "Contract deployed to... 0x........."
. Go back to the remix.ethereum page and paste the address into "Load contract from Address" 
under the deploy button.
. Then click "At address"
. Now you can enter a value (must be more than 0.01 ether) and press "enter".
. You can also add more players and if you are the manager you can select winners.

VIDEO TUTORIAL:
https://youtu.be/6k9khMYBIH4

Special thanks to: Stephen Grider
https://github.com/StephenGrider
