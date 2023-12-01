
const fs = require('fs');
const Web3 = require('web3');

// 파일을 읽어와서 JSON 파싱
const rawdata_1 = fs.readFileSync('./build/contracts/HashedTimelock.json');
const contractData_1 = JSON.parse(rawdata_1);

const rawdata_2 = fs.readFileSync('./build/contracts/HashedTimelockERC20.json');
const contractData_2 = JSON.parse(rawdata_2);

const rawdata_3 = fs.readFileSync('./build/contracts/HashedTimelockERC721.json');
const contractData_3 = JSON.parse(rawdata_3);

// ABI 추출
const hashedTimelockABI = contractData_1.abi;
const hashedTimelockERC20ABI = contractData_2.abi;
const hashedTimelockERC721ABI = contractData_3.abi;

// 로컬 이더리움 노드에 연결한다.
const web3 = new Web3('http://localhost:7545');



// 2_deploy_contracts.js에서 배포한 컨트랙트 주소
const hashedTimelockAddress = '0x848114B61A3cF34086882733C0b2e5B73AF2891A'; // 배포된 HashedTimelock 컨트랙트 주소로 대체
const hashedTimelockERC20Address = '0x76c21DC634600EBb08851380Cf8dF84346026181'; // 배포된 HashedTimelockERC20 컨트랙트 주소로 대체
const hashedTimelockERC721Address = '0xC27996DAd95e7eDBbC76fe2Dbe1d75B38798d153'; // 배포된 HashedTimelockERC721 컨트랙트 주소로 대체

// 각 컨트랙트의 인스턴스
const hashedTimelockContract = new web3.eth.Contract(hashedTimelockABI, hashedTimelockAddress);
const hashedTimelockERC20Contract = new web3.eth.Contract(hashedTimelockERC20ABI, hashedTimelockERC20Address);
const hashedTimelockERC721Contract = new web3.eth.Contract(hashedTimelockERC721ABI, hashedTimelockERC721Address);

// 컨트랙트와 상호 작용하는 함수
async function interactWithContract() {
    const contractAddressInput = document.getElementById('contractAddress').value;
    const inputData = document.getElementById('inputData').value;

    if (!contractAddressInput || !inputData) {
        alert('컨트랙트 주소와 입력 데이터를 입력하세요.');
        return;
    }

    try {
        // 동적으로 컨트랙트 주소 설정
        hashedTimelockContract.options.address = contractAddressInput;

        // 컨트랙트 함수 호출 (실제 함수 이름으로 대체)
        const result = await hashedTimelockContract.methods.upgrade(inputData).send({ from: 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#' });

        // 결과를 웹페이지에 표시
        document.getElementById('output').innerText = `컨트랙트 상호 작용 결과: ${result.transactionHash}`;
    } catch (error) {
        console.error('컨트랙트와 상호 작용 중 오류:', error);
        alert('컨트랙트와 상호 작용 중 오류 발생. 자세한 내용은 콘솔을 확인하세요.');
    }
}
