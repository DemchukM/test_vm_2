export default async function test() {
  log('Початок асинхронного виконання');
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            log('Отримано дані:', response.data);
            log('Кінець асинхронного виконання');
}
