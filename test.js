export default async function test() {
  log('Початок асинхронного виконання');
            const data = await axiosGet('https://jsonplaceholder.typicode.com/todos/1');
            log('Отримано дані:', data);
            log('Кінець асинхронного виконання');
}
