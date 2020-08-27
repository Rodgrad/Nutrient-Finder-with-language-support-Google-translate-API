# NutrientFinder-with-language-support

Resources:
https://rapidapi.com/edamam/api/Edamam%20Food%20and%20Grocery%20Database

JS, JQUERY
PHP


Using Edamam Food and Grocery Database API to fetch food nutrient values and Google Translator API to conver from native to english and vice versa.

#Idea
Idea is to use two API's to make dynamic support for native languages lacking good API for their language by using Google translate API
to convert query data to english and response data to what ever native language developer choose.

#Easy to setup
I have used Croatian('hr') language, but any other language used by Google translate is fine,
just replace translate function exLang argument 'hr'  with your language tag.
For example translate(data, 'en', 'es') to translate to Spanish.

#Translate labels
I have avoided using Google API to translate labels to keep expenses low, but it can be done
by same translate function as for example in file apis_jquery_public.js on line 28



By the time I have finished I spend all mine Google API credit so images are in english, but here are some examples of some data aquired with
Edamam Food  API.


![GitHub Logo](/images/1.png)
Format: ![Alt Text](url)

![GitHub Logo](/images/2.png)
Format: ![Alt Text](url)

![GitHub Logo](/images/3.png)
Format: ![Alt Text](url)
