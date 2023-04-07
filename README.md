<div align="center">
<h2>Mock Data Generator from DB Schema with ChatGPT</h2>
</div>

<div align="center">

[![deployed with: genezio](https://img.shields.io/badge/deployed_with-genezio-6742c1.svg?labelColor=62C353&style=flat)](https://github.com/genez-io/genezio)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&color=62C353)](https://github.com/Genez-io/genezio/blob/master/CONTRIBUTING.md)

</div>

#### [demo](https://coffee-entire-lamprey.app.genez.io/) | [ genezio docs](https://docs.genez.io/genezio-documentation/getting-started)

# What is this project?

I created a prompt generator using the OpenAI(ChatGPT) API. The prompt generator is a tool that generates mock data from DB Schema. The tool is a web application that can be used to generate mock data from DB Schema.

### Tools used:

- [genezio](https://github.com/genez-io/genezio) - the newest way to deploy and write servlerless backend code.
- [OpenAI](https://openai.com/) - the world's most powerful AI.
- [React](https://reactjs.org/) - a JavaScript library for building user interfaces.

# Getting Started

1. **Install `genezio`.** Use the command below to install genezio:

```bash
npm install genezio -g
```

2. **Login to `genezio`.** Run the following command to login into your account:

```bash
genezio login
```

3. **Clone this repo** Copy the following command in your terminal:

```bash
git clone https://github.com/radu1122/chatpgt-db-data-mocking.git
```

4. **Add your `OPENAI_SECRET_KEY` in the `.env`** The file is in the following path:

```bash
chatpgt-db-data-mocking/server/.env
```

5. **Test the code local.** Run this command to test the code:

```bash
cd ./server && genezio local
```

```bash
cd ./client && npm start
```

For more details about the `genezio` CLI commands, run `genezio help` or `genezio [command] help` or check out the [official documentation](https://docs.genez.io).

6. **Deploy your code.** Use the command below to deploy the code using `genezio`:

```bash
genezio deploy
```

# Official documentation

## How does `genezio` work?

`genezio` is using JSON RPC 2.0 to facilitate the communication between SDK and your class. Your functions are deployed in the Genezio infrastructure. The functions are not executed on a long lasting Virtual Machine. Instead, our system uses a serverless approach. Whenever a request is received, your code is loaded and executed. This is more cost and energy efficient. However, the developer needs to take into account the following - the values of the global variables are not persistent between runs.

## Detailed documentation

To find more details on how to use `genezio`, check out the official [documentation](https://genez.io/docs):

- [Getting started](https://docs.genez.io/genezio-documentation/getting-started)
- [Project Structure](https://docs.genez.io/genezio-documentation/project-structure)
- [CLI commands](https://docs.genez.io/genezio-documentation/cli-tool)
- [Test Interface](https://docs.genez.io/genezio-documentation/test-interface)
- [Integrations](https://docs.genez.io/genezio-documentation/integrations)

# Getting support

If you find yourself in a pickle using `genezio`, drop us a [GitHub issue](https://github.com/Genez-io/genezio/issues), [start a discussion with us on Discord](https://discord.gg/uc9H5YKjXv) or drop us an email at [contact@genezio.io](contact@genezio.io).

# System requirements

- `genezio` can be installed and used on macOS, Linux-based distributions and Windows.
- A version of `node` >= 14.0.0 should be installed on your machine.

# Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.
