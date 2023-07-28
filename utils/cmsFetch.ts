import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
  bucketSlug: 'portfolio-portfolio-8a59de10-2ca7-11ee-abdc-2d5f2290934e',
  readKey: 'DBzaYq0O3Ap6de38LZ0RCaJeSUpLspGVv3WSvSMdfUO3zAX1Fk',
});

export async function getProjects() {
  const data = await cosmic.objects
    .find({
      type: 'projects',
    })
    .props(['slug', 'title', 'metadata'])
    .depth(2);
  return data;
}

export async function getTechs() {
  const data = await cosmic.objects
    .find({
      type: 'technologies',
    })
    .props(['slug', 'title', 'metadata'])
    .depth(1);
  return data;
}
