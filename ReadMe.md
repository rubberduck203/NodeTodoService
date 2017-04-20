# NodeJs Todo Webservice

Spike project to determine a NodeJs stack I'd be happy to work with.
The spike was heavily focused on learning how to effectively TDD a NodeJs project.

The project also makes usse of LokiJs, which is a really neat lightweight json data store.

I was originally building this as a way to keep track of things, but it was way simpler to just spin up a Wekan image.
Still, this project has been useful as a reference while working on other projects.

## Adding Api Users

If htpasswd isnt' installed already, install it.

```bash
npm install htpasswd -g
```

If no users exist, use the `-c` option to create the new file.

```bash
cd installdir/api/data/
htpasswd -Bcb users.htpasswd username password
```

To delete a user:

```bash
htpasswd -D users.htpasswd username
```

To add a new user

```bash
htpasswd -Bb users.htpasswd username password
```

*The data directory is ignored by git, but it would probably be better to setup an environment variable.*


## Seeding the LokiJs database
The application will throw an exception if you try to query a database that doesn't exist.
You need to seed the database by running the following commands from the node terminal.

Fisrt, start the node terminal by executing the `node` command in the data directory.

```bash
$ cd api/data/
$ node

> var loki = require('lokijs');
> var db = new loki('todo.json');
> db.addCollection('todo');
> var items = db.getCollection('todo');
> items.insert({"title":"fix up the readme"});
> db.save();
```
