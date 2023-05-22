// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "@source/SoulWallet.sol";
import "@account-abstraction/contracts/core/EntryPoint.sol";
import "@source/modules/SecurityControlModule/SecurityControlModule.sol";
import "@source/trustedContractManager/trustedModuleManager/TrustedModuleManager.sol";
import "@source/trustedContractManager/trustedPluginManager/TrustedPluginManager.sol";

contract SoulWalletLogicInstence {
    TrustedModuleManager public trustedModuleManager;
    TrustedPluginManager public trustedPluginManager;
    SoulWallet public soulWalletLogic;
    SecurityControlModule public securityControlModule;

    uint256 public TrustedModuleManagerOwnerPrivateKey;

    constructor(address trustedManagerOwner, EntryPoint _entryPoint) {
        //(trustedManagerOwner, TrustedModuleManagerOwnerPrivateKey) = makeAddrAndKey("trustedManagerOwner");
        trustedModuleManager = new TrustedModuleManager(trustedManagerOwner);
        trustedPluginManager = new TrustedPluginManager(trustedManagerOwner);
        securityControlModule = new SecurityControlModule(trustedModuleManager, trustedPluginManager);
        soulWalletLogic = new SoulWallet(_entryPoint, address(securityControlModule));
    }
}