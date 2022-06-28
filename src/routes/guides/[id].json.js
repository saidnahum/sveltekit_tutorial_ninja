export async function get({ params }) {
   // connect to db & get data
   const guides = [
      { id: 1, title: 'Some title 1', body: 'Lorem, ipsum dolor.' },
      { id: 2, title: 'Some title 2', body: 'Lorem, ipsum dolor.' },
      { id: 3, title: 'Some title 3', body: 'Lorem, ipsum dolor.' },
      { id: 4, title: 'Some title 4', body: 'Lorem, ipsum dolor.' },
      { id: 5, title: 'Some title 5', body: 'Lorem, ipsum dolor.' },
   ];

   const guide = guides.find(guide => guide.id == params.id)

   if (guide) {
      return {
         status: 200,
         body: { guide }
      }
   }

   return {
      status: 404
   }
};