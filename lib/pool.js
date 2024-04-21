"use client"
import { computePoolAddress } from "@uniswap/v3-sdk"
import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json"
import { ethers } from "ethers"
const POOL_FACTORY_ADDRESS = "0x33128a8fC17869897dcE68Ed026d694621f6FDfD"

export const getPoolData = async config => {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_ADDRESS,
    tokenA: config.tokens.in,
    tokenB: config.tokens.out,
    fee: config.tokens.poolFee,
  })
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  )
  const poolContract = new ethers.Contract(
    currentPoolAddress,
    IUniswapV3PoolABI,
    provider
  )
  const [token0, token1, fee, liquidity, slot0] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
    poolContract.liquidity(),
    poolContract.slot0(),
  ])

  return {
    token0,
    token1,
    fee,
    liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  }
}
