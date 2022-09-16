let assMas = new Map();
assMas.set(1,'first');
assMas.set('two','second');
assMas.set(3, 'third');
assMas.set(4, 'four');
assMas.set(5, 'five');

for (let key of assMas.keys())
    {
      console.log(`Ключ - ${key}, значение - ${assMas.get(key)}`);
    }
