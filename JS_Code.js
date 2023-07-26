/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFT_holder = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_Name, _UID, _Stream, _City, _Package) {

    const NFT = {

        "Name" : _Name,
        "UID" : _UID,
        "Stream" : _Stream,
        "City" : _City,
        "Package_in_INR" : _Package    
     }
     NFT_holder.push(NFT);
     console.log("Successfully Minted:" + _Name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for(let i=0; i<NFT_holder.length; i++){

        console.log("\n\nAccessing data of NFT no.", i+1, "->");
        console.log("Name\t\t:",NFT_holder[i].Name);
        console.log("UID\t\t:",NFT_holder[i].UID);
        console.log("Stream\t\t:",NFT_holder[i].Stream);
        console.log("City\t\t:",NFT_holder[i].City);
        console.log("Package in INR\t:",NFT_holder[i].Package_in_INR);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n\nTotal number of NFTs minted : " + NFT_holder.length)
}

// call your functions below this line
mintNFT("Vishnu", "21BCS5240", "CSE", "Kota", "5.5 Million");
mintNFT("Vinayak", "16BME2009", "ME", "Delhi", "7.8 Million");
mintNFT("Mahi", "21BMS7781", "MS", "Ranchi", "21 Million");
mintNFT("Vaibhav", "21BCS5254", "CSE", "Gurgaon", "3.2 Million");
mintNFT("Dada", "21BSC6452", "BSC", "Kolkata", "6.9 Million");
listNFTs();
getTotalSupply();
