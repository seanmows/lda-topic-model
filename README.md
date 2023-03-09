# LDA-TOPIC-MODEL

lda-topic-model is an implementation of LDA for node.js. It extracts topics from a collection of text documents and then associates the documents with their respective topics. The model is trained by going through each word of every text documents and sampling a topic for that word. Intially the topics are all randomely assigned words from the documents. This is repeated hundreds of times.

In natural language processing, latent Dirichlet allocation (LDA) is a generative statistical model that allows sets of observations to be explained by unobserved groups that explain why some parts of the data are similar. For example, if observations are words collected into documents, it posits that each document is a mixture of a small number of topics and that each word's presence is attributable to one of the document's topics. LDA is an example of a topic model.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

```
npm install lda-topic-model
```

## Usage

```
const LDA = require('lda-topic-model');

const dictionary = []

const document = [
    {
        id: '1',
        text: 'I love doing topic modelling! It helps me find qualitative data from my text much faster'
    },
    {
        id: '2',
        text:  'You should really try LDA topic modelling to save time and do work for you'
    }
];
const options = {
    displayingStopwords: false,
    language: 'en',
    numberTopics: 2,
    sweeps: 100,
    stem: true,
};

const lda = new LDA(options, document, dictionary);
console.log(lda.getTopicWords());
// gets the topics, topic words, and topic scores
//  [
//      {id: 0, topicText: love, topic, modelling, score: 0.5},
//      {id: 1, topicText: try, topic, modelling, score: 0.5}
//  ]

console.log(lda.getDocuments());
// gets the documents and words belonging to each topic
//    [
//        {
//            topics: 0,
//            documents: [
//                {
//                    id: '1',
//                    text: 'I love doing topic modelling! It helps me find //qualitative data from my text much faster'
//                    score: 0.2
//              }
//            ],
//            documentVocab: [
//                {
//                    word: love,
//                    count: 1,
//                    stopword: no,
//                    specificity: 1
//                },
//                {
//                    word: topic,
//                    count: 2,
//                    stopword: no,
//                    specificity: 0
//                }
//            ],
//            {
//            topics: 1,
//            documents: [
//                {
//                    id: '2',
//                    text:  'You should really try LDA topic modelling to save time and do work for you'
//                    score: 0.21
//                }
//            ],
//            documentVocab: [
//                {
//                    word: try,
//                    count: 1,
//                    stopword: no,
//                    specificity: 1
//                },
//                {
//                    word: topic,
//                    count: 2,
//                    stopword: no,
//                    specificity: 0
//                }
//            ]
//        }
//        }
//    ]

console.log(lda.getVocab());
// gets the words counts and vocab of documents
//  [
//      {
//           word: try,
//           count: 1,
//           stopword: no,
//           specificity: 1
//       },
//       {
//           word: topic,
//           count: 2,
//           stopword: no,
//           specificity: 0
//       },
//       {
//           word: modelling,
//           count: 2,
//           stopword: no,
//           specificity: 0
//       }
//  ]

```

To run the algorithm on corpus of text use the following code

```
const lda = new LDA(options, document, dictionary);

```
The constructor has three parameters
* options - The settings for running LDA
* document - The document text that you are runing lda on
* dictionary - a list of additional stopwords to use

#### Example Options
There are 5 optional settings that you can configure before running LDA
* displayingStopwords {boolean} - if this is true, stopwords and their counts will be displayed when calling `getVocab()`
* language {string} - this is the language that you are running LDA in. Currently english is only supported but you can provide another language stoplist to add suppport for additioanl languages
* numberTopics {number} -  the number of topics you want, default is 10
* sweeps {number} - the number of sweeps to do, the more sweeps the more accurate but will take longer
* stem {boolean} - if true the words will be stemmed

```
{
    displayingStopwords: false,
    language: 'en',
    numberTopics: 10,
    sweeps: 100,
    stem: true,
}
```

#### Example Document Structure

The body of the document should be as below

```
[
    {
        id: '1',
        text: 'I love doing topic modelling! It helps me find qualitative data from my text much faster'
    },
    {
        id: '2',
        text:  'You should really try LDA topic modelling to save time and do work for you'
    }
]

```



####

## Acknowledgments

Based on https://github.com/primaryobjects/lda and https://github.com/mimno/jsLDA implementations
