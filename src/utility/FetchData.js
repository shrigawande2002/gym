
export const ExercieseOptions = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': 'e712387611msh24ae0e65b5a8128p1d97cbjsn9a1fe2dfacab',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

   export const YoutubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0c83c8deaemsh41224cf42222380p14ed78jsncbfa40dc54db',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const FetchData = async (url , options)=>{

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}