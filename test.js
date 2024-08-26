export default async function test() {
  log('Початок асинхронного виконання');
            const data = await global.axiosGet.apply(undefined, ['https://jsonplaceholder.typicode.com/todos/1']);
            log('Отримано дані:', data);
            log('Кінець асинхронного виконання');
}
