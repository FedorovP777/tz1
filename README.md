**Запуск**
```
docker exec tz1_translate_1 npm run seed
curl --header "Content-Type: application/json"   --request POST   --data '{"from":"en","to":"ru","text":"hello"}'  http://localhost:3001/translate   
```   

**Добавление нового сервиса.**  
Создать класс, реализующий интерфейс *src/Translate/ITranslateService.ts*, в конфиге *src/config/app.ts*,  прописать его параметром CurrentTranslateProvider.    
При необходимости, создать сидер для сохранения настроек подключения к API аналогично *src/seeds/translate.seed.ts*   