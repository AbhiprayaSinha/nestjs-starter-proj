import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Account } from 'src/account/account.model';
import { Setting } from 'src/setting/setting.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'abhi',
        password: 'abhi',
        database: 'nest-app',
      });
      
      sequelize.addModels([Account, Setting, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];