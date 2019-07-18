# LDA-TOPIC-MODEL

LDA-TOPIC-MODEL is an implementation of LDA for node.js. It extracts topics from a collection of text documents and then associates the documents with their respective topics. The model is trained by going through each word of every text documents and sampling a topic for that word. Intially the topics are all randomely assigned words from the documents. This is repeated hundreds of times.

In natural language processing, latent Dirichlet allocation (LDA) is a generative statistical model that allows sets of observations to be explained by unobserved groups that explain why some parts of the data are similar. For example, if observations are words collected into documents, it posits that each document is a mixture of a small number of topics and that each word's presence is attributable to one of the document's topics. LDA is an example of a topic model.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing


```
npm install lda-topic-model
```



## Acknowledgments

Based on https://github.com/primaryobjects/lda and https://github.com/mimno/jsLDA implementations


