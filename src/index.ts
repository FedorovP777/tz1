import {RegisterProviders} from './Providers/RegisterProviders'

async function start() {
    const registerProviders = new RegisterProviders();
    await registerProviders.register();

}

start();



