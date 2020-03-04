import Bottle from 'bottlejs'

export interface IServiceProvider {
    register(bottle: Bottle): Promise<void>
}