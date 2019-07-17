{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "{{site.url}}",
    "name": "{{site.title}}",
    "author": {
    "@type": "Person",
        "name": "{{site.author.name}}",
        "email": "{{ site.author.email }}",
        "image": [ "{{ site.author.images | join: '", "' }}" ],
        "jobTitle": "{{ site.author.jobtitle }}",
        "givenName": "{{ site.author.givenName }}",
        "familyName": "{{ site.author.familyName }}",
        "alternateName": "{{ site.author.alternateName }}",
        "birthPlace": "{{ site.author.birthPlace }}",
        "birthDate": "{{ site.author.birthDate }}",
        "height" : "{{ site.author.height }}",
        "gender": "{{ site.author.gender }}",
        "nationality": "{{ site.author.nationality }}"
    },
    "description": "{{site.description}}",
    "potentialAction": {
    "@type": "SearchAction",
        "target": "http://www.example.com/?s={search_term}",
        "query-input": "required name=search_term" }
}