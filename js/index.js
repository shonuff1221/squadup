
let network;
let contract_address;
let connection;
let mainAccount;
let accounts;

let thisURL = window.location.origin.toString()+"/squadup";
console.log(thisURL)

let Accounttype = "0";
let contractAddress = "0x9506c699846C1f4CB3B7FC559D86fCF9398b4243";
let abi =[{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROJECT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENT_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"},{"name":"plan","type":"uint8"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"},{"name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"name":"percent","type":"uint256"},{"name":"profit","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRefBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commissionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"name":"time","type":"uint256"},{"name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"name":"plan","type":"uint8"},{"name":"percent","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"profit","type":"uint256"},{"name":"start","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startUNIX","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"wallet","type":"address"},{"name":"startDate","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"plan","type":"uint8"},{"indexed":false,"name":"percent","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"profit","type":"uint256"},{"indexed":false,"name":"start","type":"uint256"},{"indexed":false,"name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"}];
let mainContract = undefined
let bscScan = "https://bscscan.com/address/"+contractAddress;

let zeroAddress = '0xfB4436f83Fd9102b93E6B4d6a6a437424E4accC0'

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

$(function() {
	createCookie()
	beginLogins()
})

let attempts = 0
async function beginLogins(){
	window.ethereum.enable()
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 300)
		}
	}, 300)
}

async function userLoginAttempt(){
	window.addEventListener("load", () => {
		interval = setInterval(async function checkConnection() {
		try {
			let isConnected = false;
			if (window.ethereum) {
				window.web3 = new Web3(window.ethereum)
				await window.ethereum.enable()

				isConnected = true;
				accounts = await web3.eth.getAccounts()
				
				await initContract()
				setUpContracts()
				
			}else{
				isConnected = false;
				connection="Plz install metamask!";
				$("#metamaskConnection").text(connection);
			}
		}catch(error) {
			console.log(error)
		}
		$("#contractAddress").effect("fade", 2500, function() {
			$("#contractAddress").fadeIn();
			$("#contractAddress").on('click',function() {
			window.open(bscScan);
			})
		});
		}, 20000);
	});
}
async function initContract(){
	try{
		await (mainContract = new web3.eth.Contract(abi,contractAddress));
		if(mainContract != undefined){
			console.log("Contract "+contractAddress+" loaded!")
			startUp()
		}else{
			console.error(error)
			setTimeout(() => {
				initContract()
			}, 500)
		}
	}catch(e){
		console.log(e)
		setTimeout(() => {
			initContract()
		}, 500)
	}
}

function startUp(){
	$('#reflink')[0].innerHTML = thisURL+"/?ref="+ accounts[0];
	getUserReferrer();
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
		$("#metamaskConnection").text(connection);
		window.web3.eth.getChainId((err, netId) => {
		  console.log("networkId==>",netId);
		  switch (netId?.toString()) {
			case "1":
			  console.log("This is mainnet");
			  $("#network").text("This is mainnet");
			  Accounttype = "1";
			  network = "mainnet";
			  break;
			case "2":
			  console.log("This is the deprecated Morden test network.");
			  $("#network").text(
				"This is the deprecated Morden test network."
			  );
			  break;
			case "3":
			  console.log("This is the ropsten test network.");
			  $("#network").text("This is the ropsten test network.");
			  network = "ropsten";
			  break;
			case "4":
			  console.log("This is the Rinkeby test network.");
			  $("#network").text("This is the Rinkeby test network.");
			  network = "Rinkeby";
			  break;
			case "42":
			  console.log("This is the Kovan test network.");
			  $("#network").text("This is the Kovan test network.");
			  network = "Kovan";
			  break;
			  case "97":
			  console.log("This is the BNB test network.");
			  $("#network").text("This is the BNB test network.");
			  network = "BNBTestnet";
			  break;
			  case "57":
				console.log("This is the BNB main network.");
				$("#network").text("This is the BNB main network.");
				network = "BNBMain";
				break;
			default:
			  console.log("This is an unknown network.");
			  $("#network").text("This is the unknown test network.");
			  }
			});

	}else{
		connection="Metamask is locked";
		$("#metamaskConnection").text(connection);
	}
}

function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      console.log(err);
      $("#lock").text(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
      $("#lock").text("MetaMask is locked.");
    } else {
      console.log("MetaMask is unlocked");
      $("#lock").text("MetaMask is unlocked.");
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
  
	let res = await mainContract.methods.invest(ref, planId).send({
		from: accounts[0],
		value: inputAmount
	}).then(res => {
		alert('TX Hash\n https://bscscan.com/tx/'+res.blockHash+'\nReferrer\n'+ref);
		console.log(res)
		//$("#investId").text(res);
	})
}
  
$('#withdraw').on('click', function() {      
  return new Promise(async (resolve, reject) => {
	   mainContract.methods.withdraw().send({
		 from:accounts[0]
	   }).on("transactionHash", async (hash) => {
		console.log("transactionHash: ", hash);
		$("#withDrawId").text(hash);
		});;
  })
});
  //Read Function
  async function getUserDividends() {
    
    return new Promise(async (resolve, reject) => {
      let reward=await mainContract.methods.getUserDividends(accounts[0]).call();
      $("#getUserDividends").text("Dividend:" +web3.utils.fromWei(reward),"ether"+"  "+ "BNB");
    })}
    async function getPercent() {
      let planId=$("#getPercentPlanId").val();
      
      return new Promise(async (resolve, reject) => {
        let percent=await mainContract.methods.getPercent(planId).call();
        $("#percentage").text("percentage:" +percent/100+"%");
      })
}

let totalUserDeposits
async function getTotalNumberOfDeposits() {
    totalUserDeposits = await mainContract.methods.getUserAmountOfDeposits(accounts[0]).call();
    $("#TotalNumberOfDeposits").text("Total: "+totalUserDeposits);
}
async function getUserAvailable() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserAvailable(accounts[0]).call();
    
    console.log("available",data);
    $("#getUserAvailable").text(web3.utils.fromWei(data,"ether")+" "+"BNB");
  })
}
async function getUserReferralBonus() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralBonus(accounts[0]).call();
    console.log("data",data);
    $("#getUserReferralBonus").text(web3.utils.fromWei(data,"ether")+" "+"BNB");
  })
}
async function getUserReferralWithdrawn() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralWithdrawn(accounts[0]).call();
    console.log("data",data);
    $("#getUserReferralWithdrawn").text(web3.utils.fromWei(data,"ether")+" "+"BNB");
  })
}
async function getUserTotalDeposits() {
    let depositData = await mainContract.methods.getUserTotalDeposits(accounts[0]).call();
    console.log("depositTotal",depositData);
    $("#getUserTotalDeposits").text(web3.utils.fromWei(depositData,"ether")+" "+"BNB");
}
async function getUserDownlineCount() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserDownlineCount(accounts[0]).call();
    console.log("Downline",data);
    downline= $('#getUserDownlineCount')[0].innerHTML = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
    
    $("#getUserDownlineCountIndex1").text("uint:" +data[0]);
    $("#getUserDownlineCountIndex2").text("uint:" +data[1]);
    $("#getUserDownlineCountIndex3").text("uint:" +data[2]);
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
		let data = await mainContract.methods.getUserDepositInfo(accounts[0], i).call();

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
  
  return new Promise(async (resolve, reject) => {
    let data = await mainContract.methods.getUserReferrer(accounts[0]).call();
    $("#getUserReferrerAddress").text("refferer:" +data);
  })
}
async function getUserCheckpoint() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserCheckpoint(accounts[0]).call();
    $("#getUserCheckpointdata").text("getUserCheckpoint:" +data);
    checkpoint = data;
  })
}
async function getUserReferralTotalBonus() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralTotalBonus(accounts[0]).call();
    $("#getUserReferralTotalBonus").text(web3.utils.fromWei(data,"ether"));
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
	contractBalance = await mainContract.methods.getContractBalance().call()
	$('#balanceContract')[0].innerHTML = contractBalance / 1e18;

	totalStaked = await mainContract.methods.totalStaked().call()
	$('#totalStaked')[0].innerHTML = totalStaked / 1e18;  
	$('#getUserTotalDeposits')[0].innerHTML = totalStaked / 1e18;  

	var plans = []
	for(let i = 0; i < 6; i++){
		plans[i] = {
			percent: 0,
			totalPercent: 0,
			day: 0,
			depositAmount: 0,
			total: 0
		}
		await mainContract.methods.getPercent(i).call().then(function(percent){
			$('#plan'+(i+1)+'Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
			plans[i].percent = percent/10;
		});
		await mainContract.methods.getPlanInfo(i).call().then(async function(c){                    
			plans[i].totalPercent = $('#plan'+(i+1)+'TPercent')[0].innerHTML = (c.time * plans[i].percent).toFixed(2);
			plans[i].day = $('#plan'+(i+1)+'Day')[0].innerHTML = c.time;
			
			plans[i].depositAmount = $('#plan'+(i+1)+'amount').on('input', function(){
				amount = this.value * plans[i].totalPercent / 100
				$('#plan'+(i+1)+'Total')[0].innerHTML = (parseFloat(amount)).toFixed(3);
			});
		});
	}
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

