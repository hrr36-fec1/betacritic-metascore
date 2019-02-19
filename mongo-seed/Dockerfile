FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db metascore --collection reviews --type json --file /init.json --jsonArray