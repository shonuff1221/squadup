
let network;
let contract_address;
let connection;
let mainAccount;
let accounts;
let thisURL = window.location.origin.toString();
console.log(thisURL);



let Accounttype = "0";
let contractAddress = "0x9506c699846C1f4CB3B7FC559D86fCF9398b4243";
let abi =[{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"},{"internalType":"uint256","name":"startDate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commissionWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let zeroAddress = '0xfB4436f83Fd9102b93E6B4d6a6a437424E4accC0'
let bscScan = "https://bscscan.com/address/"+contractAddress;

let plan = {
	time:"time",
	percent:"percent"
}
let deposit = {
	plan: "plan",
	percent: "percent",
	amount: "amount",
	profit: "profit",
	start: "start",
	finish: "finish"
}

let user = {
	ref: undefined,
	deposits: 0,
	checkpoint: 0,
	address: '',
	levels: 0,
	bonus: "bonus",
	tBonus: "totalBonus"
};

window.addEventListener("load", () => {
  interval = setInterval(async function checkConnection() {
try {
 
      let isConnected = false;
             if (window.ethereum) {
               window.web3 = new Web3(window.ethereum);
               await window.ethereum.enable();
          
       
               isConnected = true;
               setUpContracts();
             } else {
               isConnected = false;
               connection="Plz install metamask!";
               jQuery("#metamaskConnection").text(connection);

               
             }
   } catch (error) {
     
 }
 $("#contractAddress").effect("fade", 2500, function() {
  $("#contractAddress").fadeIn();
  $("#contractAddress").on('click',function() {
      window.open(bscScan);
  })
});


try {
    let accounts = await getAccounts();
    getUserReferrer();
	$('#reflink')[0].innerHTML = thisURL+"/?ref="+ accounts[0];
    getUserDepositInfo();
    getUserCheckpoint();
    getUserReferralTotalBonus();
    getUserDownlineCount();
    getUserTotalDeposits();
    getUserAvailable();
    getUserReferralWithdrawn();
    getUserReferralBonus();
    getTotalNumberOfDeposits();
    getBalanceOfAccount();
   
     
    $('#contractAddress')[0].innerHTML = contractAddress + '\ Contract Address';

    let p2 = accounts[0].slice(42 - 5)
    
    $('#walletConnet')[0].innerHTML = accounts[0].slice(0, 4) + "..." + p2
    
    
     
    if (accounts.length > 0) {
     connection="Metamask is unlocked";
    jQuery("#metamaskConnection").text(connection);
    window.web3.eth.getChainId((err, netId) => {
      console.log("networkId==>",netId);
      switch (netId?.toString()) {
        case "1":
          console.log("This is mainnet");
          jQuery("#network").text("This is mainnet");
          Accounttype = "1";
          network = "mainnet";
          break;
        case "2":
          console.log("This is the deprecated Morden test network.");
          jQuery("#network").text(
            "This is the deprecated Morden test network."
          );
          break;
        case "3":
          console.log("This is the ropsten test network.");
          jQuery("#network").text("This is the ropsten test network.");
          network = "ropsten";
          break;
        case "4":
          console.log("This is the Rinkeby test network.");
          jQuery("#network").text("This is the Rinkeby test network.");
          network = "Rinkeby";
          break;
        case "42":
          console.log("This is the Kovan test network.");
          jQuery("#network").text("This is the Kovan test network.");
          network = "Kovan";
          break;
          case "97":
          console.log("This is the BNB test network.");
          jQuery("#network").text("This is the BNB test network.");
          network = "BNBTestnet";
          break;
          case "57":
            console.log("This is the BNB main network.");
            jQuery("#network").text("This is the BNB main network.");
            network = "BNBMain";
            break;
        default:
          console.log("This is an unknown network.");
          jQuery("#network").text("This is the unknown test network.");
      }
    });

      } else {
       connection="Metamask is locked";
        jQuery("#metamaskConnection").text(connection);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("web3333===>",await window.web3);
  }, 1000);
});
function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      console.log(err);
      jQuery("#lock").text(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
      jQuery("#lock").text("MetaMask is locked.");
    } else {
      console.log("MetaMask is unlocked");
      jQuery("#lock").text("MetaMask is unlocked.");
    }
  });
}
function getBalanceOfAccount() {
  window.web3.eth.getBalance(accounts[0], (err, wei) => {
    myBalance = web3.utils.fromWei(wei, 'ether')
    console.log("Balance===>",myBalance);
    $("#getBalance").text("Account Balance:"+myBalance+" "+"BNB");
})
}
const getAccounts = async () => {
  try {
    const web3 = new Web3(window.ethereum)
     accounts = await web3.eth.getAccounts();
     jQuery("#account").text("Account:" + accounts[0]);
    console.log(accounts);
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
//Write functions
function toHexString(number){
	return '0x'+number.toString(16)
}
async function stake(planId){
  let ref
	if(validateErcAddress(user.ref))
		ref = user.ref
	else if(user.ref == accounts[0])
		ref = zeroAdddress
	else 
		ref = zeroAddress
	
	let inputAmount = toHexString($('#plan'+(planId+1)+'amount')[0].value * 1e18)
	let contract=new web3.eth.Contract(abi,contractAddress);
	let res = await contract.methods.invest(ref, planId).send({
		from: accounts[0],
		value: inputAmount
	}).then(res => {
		alert('TX Hash\n https://bscscan.com/tx/'+res.blockHash+'\nReferrer\n'+ref);
		console.log(res)
		
	})
}
  
$('#withdraw').on('click', function() {      
	let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
	  contract.methods.withdraw().send({
		 from:accounts[0]
	   }).on("transactionHash", async (hash) => {
		console.log("transactionHash: ", hash);
		$("#withDrawId").text(hash);
		});;
  })
});
  //Read Function
  async function getUserDividends() {
    let contract=new web3.eth.Contract(abi,contractAddress);
    return new Promise(async (resolve, reject) => {
      let reward=await contract.methods.getUserDividends(accounts[0]).call();
      jQuery("#getUserDividends").text("Dividend:" +web3.utils.fromWei(reward),"ether"+"  "+ "BNB");
    })}
    async function getPercent() {
      let planId=jQuery("#getPercentPlanId").val();
      let contract=new web3.eth.Contract(abi,contractAddress);
      return new Promise(async (resolve, reject) => {
        let percent=await contract.methods.getPercent(planId).call();
        jQuery("#percentage").text("percentage:" +percent/10+"%");
      })
}

let totalUserDeposits
async function getTotalNumberOfDeposits() {
	let contract=new web3.eth.Contract(abi,contractAddress);
    totalUserDeposits = await contract.methods.getUserAmountOfDeposits(accounts[0]).call();
    $("#TotalNumberOfDeposits").text("Total: "+totalUserDeposits);
}
async function getUserAvailable() {
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserAvailable(accounts[0]).call();
    
    console.log("available",data);
    jQuery("#getUserAvailable").text(web3.utils.fromWei(data,"ether")+" "+"BNB");
  })
}
async function getUserReferralBonus() {
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserReferralBonus(accounts[0]).call();
    console.log("data",data);
    jQuery("#getUserReferralBonus").text(web3.utils.fromWei(data,"ether")+" "+"BNB");
  })
}
async function getUserReferralWithdrawn() {
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserReferralWithdrawn(accounts[0]).call();
    console.log("data",data);
    jQuery("#getUserReferralWithdrawn").text(web3.utils.fromWei(data,"ether")+" "+"BNB");
  })
}
async function getUserTotalDeposits() {
	let contract=new web3.eth.Contract(abi,contractAddress);
    let depositData = await contract.methods.getUserTotalDeposits(accounts[0]).call();
    console.log("depositTotal",depositData);
    $("#getUserTotalDeposits").text(web3.utils.fromWei(depositData,"ether")+" "+"BNB");
}
async function getUserDownlineCount() {
	
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserDownlineCount(accounts[0]).call();
    console.log("Downline",data);
    downline= $('#getUserDownlineCount')[0].innerHTML = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
    
    jQuery("#getUserDownlineCountIndex1").text("uint:" +data[0]);
    jQuery("#getUserDownlineCountIndex2").text("uint:" +data[1]);
    jQuery("#getUserDownlineCountIndex3").text("uint:" +data[2]);
  })
}
async function getUserDepositInfo() {
	$('.active-stakes')[0].innerHTML = `
					<tr class="container-fluid">
						<td id="getUserDepositInfo1" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">Plan</td>
						<td id="getUserDepositInfo2" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">Percent</td>
						<td id="getUserDepositInfo3" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">Amount</td>
						<td id="getUserDepositInfo4" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">Profit</td>
						<td id="getUserDepositInfo5" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">Start</td>
						<td id="getUserDepositInfo6" class="heading mbr-card-title mbr-fonts-style display-5">Finish</td>
					</tr>
	`
	for(let i = 0; i < totalUserDeposits; i++){
		let contract=new web3.eth.Contract(abi,contractAddress);
		let data = await contract.methods.getUserDepositInfo(accounts[0], i).call();

		let start = (new Date(data[4] * 1000).getMonth()+1) +'/'+ new Date(data[4] * 1000).getDate()
		let end = (new Date(data[5] * 1000).getMonth()+1) +'/'+ new Date(data[5] * 1000).getDate()
		let newRow = `
			<tr class="container-fluid">
				<td id="getUserDepositInfo1" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">${data[0]}</td>
				<td id="getUserDepositInfo2" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">${data[1]}</td>
				<td id="getUserDepositInfo3" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">${web3.utils.fromWei(data[2], "ether")}</td>
				<td id="getUserDepositInfo4" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">${web3.utils.fromWei(data[3], "ether")}</td>
				<td id="getUserDepositInfo5" style="padding-right: 40px;" class="heading mbr-card-title mbr-fonts-style display-5">${start}</td>
				<td id="getUserDepositInfo6" class="heading mbr-card-title mbr-fonts-style display-5">${end}</td>
			</tr>
		`
		$('.active-stakes')[0].innerHTML += newRow
	}
}
  

async function getUserReferrer() {
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserReferrer(accounts[0]).call();
    console.log("refferer:",data);
    jQuery("#getUserReferrerAddress").text("refferer:" +data);
  })
}
async function getUserCheckpoint() {
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserCheckpoint(accounts[0]).call();
    console.log("checkpoint:",data);
    jQuery("#getUserCheckpointdata").text("getUserCheckpoint:" +data);
    checkpoint = data;
  })
}
async function getUserReferralTotalBonus() {
  let contract=new web3.eth.Contract(abi,contractAddress);
  return new Promise(async (resolve, reject) => {
    let data=await contract.methods.getUserReferralTotalBonus(accounts[0]).call();
    console.log("ReferralTotalBonus:",data);
    jQuery("#getUserReferralTotalBonus").text(web3.utils.fromWei(data,"ether"));
  })
}

 function copyToClipboard(reflink) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(reflink).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	alert("Copied");
}

function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges()
    } else if (document.selection) {
        document.selection.empty()
    }
}

async function setUpContracts() {
 
  let contract = new web3.eth.Contract(abi, contractAddress)
  if (!contract) return void 0

  contractBalance = contract.methods.getContractBalance().call().then(function(balance) {
      $('#balanceContract')[0].innerHTML = balance / 1e18;
      console.log(balance);
      });
  
  totalStaked = contract.methods.totalStaked().call().then(function(totalStaked) {
  $('#totalStaked')[0].innerHTML = totalStaked / 1e18;                   
      });
      

      plan1Percent = contract.methods.getPercent(0).call().then(function(percent) {
        p1Percents= $('#plan1Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
        p1Percent=percent/10;
      });
      plan2Percent = contract.methods.getPercent(1).call().then(function(percent) {
        p2Percents= $('#plan2Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
        p2Percent=percent/10;
      });
      plan3Percent = contract.methods.getPercent(2).call().then(function(percent) {
        p3Percents= $('#plan3Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
        p3Percent=percent/10;
      });
      plan4Percent = contract.methods.getPercent(3).call().then(function(percent) {
        p4Percents= $('#plan4Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
        p4Percent=percent/10;
      });
      plan5Percent = contract.methods.getPercent(4).call().then(function(percent) {
        p5Percents= $('#plan5Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
        p5Percent=percent/10;
      });
      plan6Percent = contract.methods.getPercent(5).call().then(function(percent) {
        p6Percents= $('#plan6Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
        p6Percent=percent/10;
      });

      plan1 = contract.methods.getPlanInfo(0).call().then(async function(c){                    
    
    
    p1TotalPercent= $('#plan1TPercent')[0].innerHTML = c.time * p1Percent;
    console.log(p1TotalPercent);
    p1Day= $('#plan1Day')[0].innerHTML = c.time;
    p1DepositAmount= $('#plan1amount').on('input', function(){
         amount1 = (this.value * p1TotalPercent / 100);
         p1Amount = (amount1).toFixed(2);
         p1Total = $('#plan1Total')[0].innerHTML = (parseFloat(this.value) + parseFloat(amount1)).toFixed(2);
       });
      
                     
});
     
  plan2 = contract.methods.getPlanInfo(1).call().then(function(c){                    
      
      p2TotalPercent=$('#plan2TPercent')[0].innerHTML = (c.time * p2Percent).toFixed(2);
      console.log(p2TotalPercent);
      p2Day= $('#plan2Day')[0].innerHTML = c.time;
      p2DepsoitAmount= $('#plan2amount').on('input', function(){
          amount2 = (this.value * p2TotalPercent / 100);
          p2Total = $('#plan2Total')[0].innerHTML = (parseFloat(this.value) + parseFloat(amount2)).toFixed(2);
          
      });
 

  });
  
  plan3 = contract.methods.getPlanInfo(2).call().then(function(c){                    
      
      p3TotalPercent= $('#plan3TPercent')[0].innerHTML = (c.time * p3Percent).toFixed(2);
      p3Day= $('#plan3Day')[0].innerHTML = c.time;
      p3DepsoitAmount= $('#plan3amount').on('input', function(){
          amount3 = (this.value * p3TotalPercent / 100);
          console.log(amount3)
          p3Total = $('#plan3Total')[0].innerHTML = (parseFloat(this.value) + parseFloat(amount3)).toFixed(2);
          
      });
  


  });
  
  plan4 = contract.methods.getPlanInfo(3).call().then(function(c){                    
      
      p4TotalPercent= $('#plan4TPercent')[0].innerHTML = (c.time * p4Percent).toFixed(2);
      p4Day= $('#plan4Day')[0].innerHTML = c.time;
      p4DepsoitAmount= $('#plan4amount').on('input', function(){
          amount4 = (this.value * p4TotalPercent / 100);
          console.log(amount4)
          p4Total = $('#plan4Total')[0].innerHTML = (parseFloat(this.value) + parseFloat(amount4)).toFixed(2);
          
      });
   

  });
  
  plan5 = contract.methods.getPlanInfo(4).call().then(function(c){                    
      
      p5TotalPercent= $('#plan5TPercent')[0].innerHTML = (c.time * p5Percent).toFixed(2);
      p5Day= $('#plan5Day')[0].innerHTML = c.time;
      p5DepsoitAmount= $('#plan5amount').on('input', function(){
          amount5 = (this.value * p5TotalPercent / 100);
          console.log(amount5)
          p5Total = $('#plan5Total')[0].innerHTML = (parseFloat(this.value) + parseFloat(amount5)).toFixed(2);
          
      });


  });
  
  plan6 = contract.methods.getPlanInfo(5).call().then(function(c){                    
     
      p6TotalPercent= $('#plan6TPercent')[0].innerHTML = (c.time * p6Percent).toFixed(2);
      p6Day= $('#plan6Day')[0].innerHTML = c.time;
      p6DepsoitAmount= $('#plan6amount').on('input', function(){
          amount6 = (this.value * p6TotalPercent / 100);
          console.log(amount6)
          p3Total = $('#plan6Total')[0].innerHTML = (parseFloat(this.value) + parseFloat(amount6)).toFixed(2);
          
      });
    
  });


 
  console.log("Contract Loaded");
  
  
  
}
//COOKIE CREATION
function createCookie() {
    if (window.location.href.indexOf("ref=") < 0) {
        user.ref = zeroAddress
    }else{
        const index = window.location.href.indexOf("ref=") + 4
		let ref = window.location.href.slice(index, index + 42)
		if(window.localStorage) {
			localStorage.setItem('referrerAddress', ref);
		}

		let date = new Date();
		date.setTime(date.getTime() + (10000 * 24 * 60 * 60 * 1000))
		document.cookie = "ref=" + ref + "; expires=" + date.toGMTString()
	}
	accessCookie("ref")
}

//ACCESS COOKIE
function accessCookie(cookieName) {
    let name = cookieName + "=";
	let accessedCookie
    let allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i++) {
        let temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0){
			accessedCookie = temp.substring(name.length, temp.length)
			if(validateErcAddress(accessedCookie))
				user.ref = accessedCookie
			console.log("Referrer: " + user.ref)
		}
    }
}

function validateErcAddress(address) {
    if (typeof address !== 'string')
        return false;

    if (address[0] === "0" && address[1] === "x"&& address.length == 42)
        return true;

    return false;
}

