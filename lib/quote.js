"use client"
import { Token } from "@uniswap/sdk-core"
import { FeeAmount } from "@uniswap/v3-sdk"
import { abi as QuoterABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json"
import { ethers } from "ethers"
import { getPoolData } from "./pool"

const READABLE_FORM_LEN = 4

export function fromReadableAmount(amount, decimals) {
  return ethers.utils.parseUnits(amount.toString(), decimals)
}

export function toReadableAmount(rawAmount, decimals) {
  return ethers.utils
    .formatUnits(rawAmount, decimals)
    .slice(0, READABLE_FORM_LEN)
}

const QUOTER_ADDRESS = "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a"

const WETH = new Token(
  8453,
  "0x4200000000000000000000000000000000000006",
  18,
  "WETH",
  "Wrapped Ether"
)

const STREAMZ = new Token(
  8453,
  process.env.NEXT_PUBLIC_STREAMZ_ADDRESS,
  18,
  "STREAMZ",
  "Streamz"
)

const USDC = new Token(
  8453,
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  6,
  "USDC",
  "USD Coin"
)

export const buyConfig = amountIn => ({
  rpc: {
    local: "http://localhost:8545",
    mainnet: process.env.NEXT_PUBLIC_RPC_URL,
  },
  tokens: {
    in: WETH,
    amountIn: 1000,
    out: STREAMZ,
    poolFee: FeeAmount.MEDIUM,
  },
})

export const sellConfig = amountIn => ({
  rpc: {
    local: "http://localhost:8545",
    mainnet: process.env.NEXT_PUBLIC_RPC_URL,
  },
  tokens: {
    in: STREAMZ,
    amountIn: 1000,
    out: USDC,
    poolFee: FeeAmount.MEDIUM,
  },
})

export const getQuote = async config => {
  const { token0, token1, fee } = await getPoolData(config)
  const quoterContract = new ethers.Contract(
    QUOTER_ADDRESS,
    QuoterABI,
    provider
  )
  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    token0,
    token1,
    fee,
    fromReadableAmount(
      config.tokens.amountIn,
      config.tokens.in.decimals
    ).toString(),
    0
  )

  return quotedAmountOut
}
