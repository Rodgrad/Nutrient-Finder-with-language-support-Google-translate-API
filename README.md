# NutrientFinder-with-language-support using Google translate API

# Resources:

https://rapidapi.com/edamam/api/Edamam%20Food%20and%20Grocery%20Database

https://rapidapi.com/googlecloud/api/google-translate1
JS, JQUERY
PHP

# Brief
Using Edamam Food and Grocery Database API to fetch food nutrient values and Google Translator API to convert from native to English and vice versa.

# Idea

Idea is to use two APIs to make dynamic support for native languages lacking good API for food nutrition values by using Google translate API to convert query data to English and response data to whatever native language developer chooses.

# Easy to setup

I have used Croatian('hr') language, but any other language used by Google translate is fine, just replace translate function exLang argument 'hr' with your language tag. For example translate(data, 'en', 'es') to translate to Spanish.

# Translate labels

I have avoided using Google API to translate labels to keep expenses low, but it can be done by same translate function for example in file apis_jquery_public.js on line 28 just replace 'Food' label with translate('Food', 'en', 'hr') and it will translate label 'Food' to Croatian word for food. Advice is to keep using for intended, and that is getting the right data from native language queries.

# Note

Google Translate API does have support for language detection, so you could use it to generate translate function srclang and exlang arguments.


By the time I have finished I spend all mine Google API credit so images are in English, but here are some examples of some data acquired with Edamam Food API.

![GitHub Logo](/images/1.png)
Format: ![Alt Text](url)

![GitHub Logo](/images/2.png)
Format: ![Alt Text](url)

![GitHub Logo](/images/3.png)
Format: ![Alt Text](url)
