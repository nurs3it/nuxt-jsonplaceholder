let api = "https://jsonplaceholder.typicode.com";
import axios from "axios";
import _ from "static/api/utils"; // Подробнее смотреть с первой строки файла в комментах

export default {

  // Сервисы будем дергать с async/await
  users: {
    getUsers: function() {
      // Получаем всех пользователей
      return axios.get(api + _.users.USERS);
    },
    getUserById: function(userId) {
      // Получаем пользователя по id
      return axios.get(api + "/users" + "/" + userId);
    }
  }
};
