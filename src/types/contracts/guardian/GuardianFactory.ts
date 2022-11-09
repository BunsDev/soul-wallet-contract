/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface GuardianFactoryInterface extends utils.Interface {
  functions: {
    "createGuardianMultiSig(address,address[],uint256,bytes32)": FunctionFragment;
    "getGuardianAddress(address,bytes,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createGuardianMultiSig" | "getGuardianAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createGuardianMultiSig",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardianAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "createGuardianMultiSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardianAddress",
    data: BytesLike
  ): Result;

  events: {
    "NewGuardianCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewGuardianCreated"): EventFragment;
}

export interface NewGuardianCreatedEventObject {
  addr: string;
}
export type NewGuardianCreatedEvent = TypedEvent<
  [string],
  NewGuardianCreatedEventObject
>;

export type NewGuardianCreatedEventFilter =
  TypedEventFilter<NewGuardianCreatedEvent>;

export interface GuardianFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuardianFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createGuardianMultiSig(
      _guardianMultiSigImpAddr: PromiseOrValue<string>,
      _guardians: PromiseOrValue<string>[],
      _threshold: PromiseOrValue<BigNumberish>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGuardianAddress(
      _logic: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createGuardianMultiSig(
    _guardianMultiSigImpAddr: PromiseOrValue<string>,
    _guardians: PromiseOrValue<string>[],
    _threshold: PromiseOrValue<BigNumberish>,
    _salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGuardianAddress(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    _salt: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createGuardianMultiSig(
      _guardianMultiSigImpAddr: PromiseOrValue<string>,
      _guardians: PromiseOrValue<string>[],
      _threshold: PromiseOrValue<BigNumberish>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getGuardianAddress(
      _logic: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "NewGuardianCreated(address)"(
      addr?: PromiseOrValue<string> | null
    ): NewGuardianCreatedEventFilter;
    NewGuardianCreated(
      addr?: PromiseOrValue<string> | null
    ): NewGuardianCreatedEventFilter;
  };

  estimateGas: {
    createGuardianMultiSig(
      _guardianMultiSigImpAddr: PromiseOrValue<string>,
      _guardians: PromiseOrValue<string>[],
      _threshold: PromiseOrValue<BigNumberish>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGuardianAddress(
      _logic: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createGuardianMultiSig(
      _guardianMultiSigImpAddr: PromiseOrValue<string>,
      _guardians: PromiseOrValue<string>[],
      _threshold: PromiseOrValue<BigNumberish>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGuardianAddress(
      _logic: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}