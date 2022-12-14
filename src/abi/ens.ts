import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ens.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    ControllerAdded: new LogEvent<([controller: string] & {controller: string})>(
        abi, '0x0a8bb31534c0ed46f380cb867bd5c803a189ced9a764e30b3a4991a9901d7474'
    ),
    ControllerRemoved: new LogEvent<([controller: string] & {controller: string})>(
        abi, '0x33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e81113'
    ),
    NameMigrated: new LogEvent<([id: ethers.BigNumber, owner: string, expires: ethers.BigNumber] & {id: ethers.BigNumber, owner: string, expires: ethers.BigNumber})>(
        abi, '0xea3d7e1195a15d2ddcd859b01abd4c6b960fa9f9264e499a70a90c7f0c64b717'
    ),
    NameRegistered: new LogEvent<([id: ethers.BigNumber, owner: string, expires: ethers.BigNumber] & {id: ethers.BigNumber, owner: string, expires: ethers.BigNumber})>(
        abi, '0xb3d987963d01b2f68493b4bdb130988f157ea43070d4ad840fee0466ed9370d9'
    ),
    NameRenewed: new LogEvent<([id: ethers.BigNumber, expires: ethers.BigNumber] & {id: ethers.BigNumber, expires: ethers.BigNumber})>(
        abi, '0x9b87a00e30f1ac65d898f070f8a3488fe60517182d0a2098e1b4b93a54aa9bd6'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    GRACE_PERIOD: new Func<[], {}, ethers.BigNumber>(
        abi, '0xc1a287e2'
    ),
    addController: new Func<[controller: string], {controller: string}, []>(
        abi, '0xa7fc7a07'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    available: new Func<[id: ethers.BigNumber], {id: ethers.BigNumber}, boolean>(
        abi, '0x96e494e8'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    baseNode: new Func<[], {}, string>(
        abi, '0xddf7fcb0'
    ),
    controllers: new Func<[string], {}, boolean>(
        abi, '0xda8c229e'
    ),
    ens: new Func<[], {}, string>(
        abi, '0x3f15457f'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isOwner: new Func<[], {}, boolean>(
        abi, '0x8f32d59b'
    ),
    nameExpires: new Func<[id: ethers.BigNumber], {id: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xd6e4fa86'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    reclaim: new Func<[id: ethers.BigNumber, owner: string], {id: ethers.BigNumber, owner: string}, []>(
        abi, '0x28ed4f6c'
    ),
    register: new Func<[id: ethers.BigNumber, owner: string, duration: ethers.BigNumber], {id: ethers.BigNumber, owner: string, duration: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xfca247ac'
    ),
    registerOnly: new Func<[id: ethers.BigNumber, owner: string, duration: ethers.BigNumber], {id: ethers.BigNumber, owner: string, duration: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x0e297b45'
    ),
    removeController: new Func<[controller: string], {controller: string}, []>(
        abi, '0xf6a74ed7'
    ),
    renew: new Func<[id: ethers.BigNumber, duration: ethers.BigNumber], {id: ethers.BigNumber, duration: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xc475abff'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[to: string, approved: boolean], {to: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setResolver: new Func<[resolver: string], {resolver: string}, []>(
        abi, '0x4e543b26'
    ),
    supportsInterface: new Func<[interfaceID: string], {interfaceID: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
}

export class Contract extends ContractBase {

    GRACE_PERIOD(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.GRACE_PERIOD, [])
    }

    available(id: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.available, [id])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    baseNode(): Promise<string> {
        return this.eth_call(functions.baseNode, [])
    }

    controllers(arg0: string): Promise<boolean> {
        return this.eth_call(functions.controllers, [arg0])
    }

    ens(): Promise<string> {
        return this.eth_call(functions.ens, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isOwner(): Promise<boolean> {
        return this.eth_call(functions.isOwner, [])
    }

    nameExpires(id: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nameExpires, [id])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    supportsInterface(interfaceID: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceID])
    }
}
