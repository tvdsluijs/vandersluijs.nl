{
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "{{ site.author.name }}",
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
    "nationality": "{{ site.author.nationality }}",
    "telephone": "{{ site.author.telephone }}",
    "url": "{{ site.url }}",
    "description": "{{ site.author.description }}",
    "owns":{
    "@type": "Organization",
        "address": {
        "@type": "PostalAddress",
            "addressLocality": "{{ site.author.owns.addressLocality }}",
            "addressRegion": "{{ site.author.owns.addressRegion }}",
            "postalCode": "{{ site.author.owns.postalCode }}",
            "streetAddress": "{{ site.author.owns.streetAddress }}"
    },
    "email": "{{ site.author.owns.email }}",
        "name": "{{ site.author.owns.name }}",
        "telephone": "{{ site.author.owns.telephone }}"
},
    "sameAs": [ "{{ site.author.sameAs | join: '", "' }}" ]
}