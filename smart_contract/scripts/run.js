async function main() {
  const TweetContract = await hre.ethers.getContractFactory("TweetContract");
  const tweetContract = await TweetContract.deploy();
  await tweetContract.deployed();
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
