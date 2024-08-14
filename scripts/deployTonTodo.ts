import { toNano } from '@ton/core';
import { TonTodo } from '../wrappers/TonTodo';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const tonTodo = provider.open(await TonTodo.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await tonTodo.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(tonTodo.address);

    console.log('ID', await tonTodo.getId());
}
