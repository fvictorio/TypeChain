/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
} from "ethers";
import type { AddressLike } from "ethers/address";
import type { ContractRunner } from "ethers/providers";
import type { ContractMethod } from "ethers/contract";
import type { Listener } from "ethers/utils";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Issue552_Observer {
  export type ObservationStruct = {
    val: BigNumberish;
    blockTimestamp: BigNumberish;
  };

  export type ObservationStructOutput = [
    val: bigint,
    blockTimestamp: bigint
  ] & { val: bigint; blockTimestamp: bigint };
}

export declare namespace Issue552_Reproduction {
  export type ObservationParamsStruct = {
    observations: Issue552_Observer.ObservationStruct[];
    index: BigNumberish;
  };

  export type ObservationParamsStructOutput = [
    observations: Issue552_Observer.ObservationStructOutput[],
    index: bigint
  ] & {
    observations: Issue552_Observer.ObservationStructOutput[];
    index: bigint;
  };
}

export interface Issue552_ReproductionInterface extends Interface {
  getFunction(
    nameOrSignature: "bars" | "input" | "makeObservation"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bars", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "input",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "makeObservation",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bars", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "input", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeObservation",
    data: BytesLike
  ): Result;
}

export interface Issue552_Reproduction extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: Issue552_ReproductionInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bars: TypedContractMethod<
    [arg0: BigNumberish],
    [Issue552_Reproduction.ObservationParamsStructOutput],
    "view"
  >;

  input: TypedContractMethod<[values: BigNumberish[]], [void], "view">;

  makeObservation: TypedContractMethod<
    [barId: BigNumberish, newVal: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bars"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [Issue552_Reproduction.ObservationParamsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "input"
  ): TypedContractMethod<[values: BigNumberish[]], [void], "view">;
  getFunction(
    nameOrSignature: "makeObservation"
  ): TypedContractMethod<
    [barId: BigNumberish, newVal: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
