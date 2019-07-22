//Questions for app
var questionSet = [
    {
    question : 'How many breeds of dog are there worldwide?',
    answers : ['1600','800','200','400'],
    correctAnswer : '400',
    blurb : `According to the World Canine Organization 
            FCI (Fédération Cynologique Internationale), there are approximately 
            400 recognized breeds of dog worldwide. There is some contention, 
            however, as to the exact number of dog breeds as various kennel clubs 
            recognize different breeds. In addition, all "purebreds" are, in reality,
            derived from mixed-breed dog populations, complicating the issue further.`  
    },
    {
    question : 'What dog is known for its bluish-black tongue?',
    answers : ['AFGHAN HOUND','CHOW CHOW','AMERICAN BULLDOG','LHASA APSO'],
    correctAnswer : 'CHOW CHOW',
    blurb :`One of the oldest breeds of dogs, Chow Chows are known for their 
            bluish-black tongues and gums. They aren't born with this coloration, 
            however. At birth, a Chow Chow's tongue and gums will be pink; 
            by eight weeks, however, they will take on the bluish-black color. 
            Originally from China, the Chow Chow's name (Songshi Quan), 
            literally translated, means "puffy lion dog".`
    },
    {
    question : 'What is the largest breed of dog?',
    answers : ['IRISH WOLFHOUND','ENGLISH MASTIFF','ST. BERNARD','GREAT DANE'],
    correctAnswer : 'IRISH WOLFHOUND',
    blurb :`Standing at an average height of approximately 34 inches 
            (from the withers or shoulder-blade), the Irish Wolfhound is 
            generally considered the world's largest (tallest) dog. 
            According to legend, Irish Wolfhounds were guardians and companions 
            of ancient Irish kings and were valued by Celtic chieftains as 
            dogs of war. According to some sources, they were (as the name implies) 
            originally bred to hunt wolves. In spite of their impressive height, 
            the average weight for an Irish Wolfhound is only about 120 pounds. 
            The English Mastiff is generally considered the world's heaviest dog. 
            In 1999, an English Mastiff named Kell weighed in at a whopping 
            286 pounds (130 kg). According to Kell's owner, her food bill came 
            to £200 a week!`
    } ,
    {
    question : 'What breed of dog was originated in the late 1800s by Captain Max von Stephanitz who hoped to develop an all-purpose working dog?',
    answers : ['GERMAN SPITZ','GERMAN SHEPHERD','BORDER COLLIE','ST. BERNARD'],
    correctAnswer : 'GERMAN SHEPHERD',
    blurb :`The German Shepherd Dog was originated in Germany in 
            the late 1800s by Captain Max von Stephanitz, 
            a former German Army Captain who hoped to breed an all-purpose 
            working dog. He created the schutzhund trial, a breed test, 
            and any dog that failed the trial was prohibited from breeding.
             These strict guidelines led to the rapid development of the 
             breed's abilities and intelligence, and the German Shepherd 
             soon proved itself a superior working dog. After World War I, 
             American soldiers, impressed by the German Shepherd's intelligence 
             and trainability, brought the breed to the United States where 
             it quickly became a popular pet as well as working dog. Today, 
             German Shepherds are often trained as police dogs, guide dogs, 
             guard dogs, and of course sheepdogs. They are also known as Alsations 
             or Schaferhunds.`
    } ,
    {
    question : 'What is the fastest breed of dog?',
    answers : ['HARRIER','SWEDISH VALLHUND','GREYHOUND','GERMAN SPITZ'],
    correctAnswer : 'GREYHOUND',
    blurb :`Reaching speeds of up to 45 miles per hour (72 km/h), 
            the Greyhound is the fastest breed of dog. In fact, 
            the only land animal faster than the Greyhound is the cheetah. 
            Not surprisingly, Greyhounds are bred primarily for racing.`
    } ,
    {
    question : 'What is the only dog that can\'t bark?',
    answers : ['SALUKI','BASENJI','WHIPPET','BORZOI'],
    correctAnswer : 'BASENJI',
    blurb :`The Basenji, an African hunting dog, is 
            the only dog that cannot bark. This trait is probably 
            due to the shallow laryngeal ventricle in its larynx. However, 
            the Basenji is certainly not silent and can make a wide 
            variety of other dog noises as well as a unique yodelling sound. 
            One of the most ancient breeds of dogs, Basenjis were once feared 
            extinct until they were rediscovered living among the Azande and 
            Mangbetu tribes from the northeastern Congo region of Africa in 1895.`
    } ,
    {
    question : 'What is the most popular dog in the United States?',
    answers : ['BEAGLE','LABRADOR RETRIEVER','GERMAN SHEPHERD','POODLE'],
    correctAnswer : 'LABRADOR RETRIEVER',
    blurb :`According to the American Kennel Club's registration statistics, 
            the most popular dog in the United States is the Labrador Retriever. 
            In 2004, nearly three times as many Labs were registered (146,692) 
            as any other breed. This marked the 15th consecutive year that the 
            Labrador Retriever topped the rankings. Golden Retrievers 
            (52,550 registrations) were the second most popular breed of dog, 
            followed by German Shepherds (46,046), Beagles (44,555), and Yorkshire 
            Terriers (43,522). According to the AKC's statistics, the least popular 
            purebred dog in 2004 was the English Foxhound with only 17 registrations.`
    } ,
    {
    question : 'What breed of dog was originated in Germany by a tax collector who needed a guard dog for protection?',
    answers : ['DOBERMANN','GREAT DANE','PIT BULL','ROTTWEILER'],
    correctAnswer : 'DOBERMANN',
    blurb :`The Dobermann or Dobermann Pinscher was originated in Germany 
            around 1890 by Louis Dobermann, a tax collector who needed a guard 
            dog for protection. Hoping to develop a breed of dog with maximum strength, 
            loyalty, intelligence, and fierceness, Dobermann is believed to have 
            mixed a number of breeds including the German Shepherd, the Great Dane, 
            the Greyhound, the Pinscher, and the Rottweiler. Today, Dobermanns are 
            commonly used as guard dogs and police dogs.`
    } ,
    {
    question : 'What breed of dog has the longest ears?',
    answers : ['SIBERIAN HUSKY','POLISH HOUND','SHIH TZU','BASSET HOUND'],
    correctAnswer : 'BASSET HOUND',
    blurb :`Basset Hounds are generally considered to be the breed of dog 
            with the longest ears. According to the Guinness Book of World Records, 
            a Basset Hound from Germany named Jack holds the record for longest 
            ears on a dog. Jack's ears measure a remarkable 13 inches and are so long 
            that he sometimes trips over them when he walks.`
    } ,
    {
    question : 'All dogs are generally believed to be descended from what prehistoric animal?',
    answers : ['TOMARCTUS','PROAILURUS','THYLACOLEONIDAE','THYLACOSMILUS'],
    correctAnswer : 'TOMARCTUS',
    blurb :`All modern dogs are generally believed to be descended from Tomarctus, 
            a stealthy predator that roamed the plains and grasslands of North America 
            approximately ten to fifteen million years ago. Wolves, jackals, and 
            coyotes are also believed to be descendants of Tomarctus.`
    }] 

//counter
var wins = 0;
var losses = 0;
var counter = 30;

function decreaseCounter(){
    if (counter > 0){
        counter--
        $('#counter').text(counter);
        UserLost();
        clearInterval(timeOut);
    }
}

// timer
 var timeOut = setInterval(decreaseCounter, 1*1000);

 //lost logic
function UserLost(){
    if(counter == 0){
        losses ++
        console.log('losses = '+losses);
        $('button').attr("disabled", true);
    }
}

// $('button').on('click', function(){
//     var textVal = $(this).text();
//     alert(textVal);
//     // alert((this).attr('id'));
// })

var objLength = questionSet.length;
for(var qSet of questionSet){
    console.log(qSet.question);
    for(var option of qSet.answers){
        console.log(option);
    }
    console.log('===>'+qSet.correctAnswer);
}
console.log(objLength);

$(document).ready(function(){
    $("#gameDisplay").hide();
    $("#Start").click(function(){
        $("#Start").hide();
        $("#gameDisplay").show();
        // array.forEach(element => {
            
        // });
        $('#counter').text(counter);
        setInterval(decreaseCounter, 1*1000);
    });


});

