export default async function test() {
  log('Початок асинхронного виконання');
            await new Promise(resolve => setTimeout(resolve, 1000));
            log('Кінець асинхронного виконання');
}
