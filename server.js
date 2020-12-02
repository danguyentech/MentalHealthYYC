const express = require('express')
const app = express()
const cors = require('cors') 
app.use(cors())
app.use(express.json())

const audioResources = [
    {
        color1:'Blue',
        color2: 'Yellow',
        name: 'Affirmation Pod',
        description: 'A podcast meant to help people accept themsleves through self affirmation and positivity',
        link: 'https://www.affirmationpod.com'
    },
    {
        color1: 'Green',
        color2: 'Red',
        name: 'Train the Mind',
        description: 'A daily podcast about mental wellness',
        link: 'https://open.spotify.com/show/5ulnZFwoLkEv566YCZwTvY',
    },
    {
        color1: 'Yellow',
        color2: 'Blue',
        name: 'Coffitivity',
        description: 'A website that plays coffee shop sounds to help with focus',
        link: 'https://coffitivity.com',
    }
]

const videoResources = [
    {
        color1: 'Orange',
        color2: 'Green',
        name: 'A Ten Minute Guided Meditation to Clear Your Mind',
        description: 'This 10 minute guided meditation is an effective way to eliminate overthinking by clearing your mind, allowing yourself to relax and get settled into the moment.',
        link: 'https://www.youtube.com/watch?v=ez3GgRqhNvA'
    },
    {
        color1: 'Red',
        name: '10-Minute Yoga For Self Care - Yoga With Adriene',
        description: '10 min Yoga For Self Care invites you to take 10 min of your day to practice self care and love of self. We spend a lot of time on our phones, computers, in traffic, working, and taking care of others. Take TEN to tend to your mind and body with this practice that combines yoga asana, breath, and massage.',
        link: 'https://youtu.be/VpW33Celubg?list=PLui6Eyny-UzwiUzvhM2BjxThodiRWZ2JR',
    },
    {
        color1: 'Blue',
        name: 'The gift and power of emotional courage TedTalk',
        description: 'Psychologist Susan David shares how the way we deal with our emotions shapes everything that matters: our actions, careers, relationships, health and happiness. In this deeply moving, humorous and potentially life-changing talk, she challenges a culture that prizes positivity over emotional truth and discusses the powerful strategies of emotional agility. A talk to share.',
        link: 'https://www.ted.com/talks/susan_david_the_gift_and_power_of_emotional_courage?referrer=playlist-how_to_practice_emotional_first_aid',
    }
]

const phoneResources = [
    {
        color1: 'Green',
        name: 'CANADIAN MENTAL HEALTH ASSOCIATION (CMHA)',
        description: 'The CMHA is a non-profit organization that builds awareness about mental health and provides individuals dealing with mental health issues with advocacy, education, housing, counselling and a variety of programs. Whether you or a family member are dealing with substance abuse, mental health challenges or even the loss of a loved one, the CMHA Calgary chapter can help with emotional support, life coaching and programming, as well as referrals to other community resources.',
        link: 'http://cmha.calgary.ab.ca',
        phone: '403-297-1700',
    },
    {
        color1: 'Yellow',
        name: 'DISTRESS CENTRE',
        description: 'The Distress Centre is a 24-hour crisis line available in Calgary and Southern Alberta. This resource is useful if you need someone to talk to or recommended resources when you are in a crisis situation. The best way to describe the Distress Centre is to use their own words: “We do not define crisis. We do not judge. Anyone can call us day or night.” The Distress Centre can be contacted by phone, email or online chat during the day.',
        link: 'https://www.distresscentre.com/',
        phone: '403-266-4357',
    },
    {
        color1: 'Orange',
        name: 'ADDICTION HELPLINE',
        description: 'The Addiction Helpline is available 24/7 and is available for any Albertan suffering from addiction. The helpline is confidential and provides support and referral to community services for individuals suffering from alcohol, drug and gambling issues.',
        phone: '1-866-332-2322',
    },
    {
        color1: 'Red',
        name: 'URGENT MENTAL HEALTH IN URGENT CARE',
        description: 'Crisis mental health assessment and support is available at two of the Urgent Care Centres in Calgary:<br>Sheldon M. Chumir Health Centre (SMCHC), located in the Beltline<br>South Calgary Health Centre (SCHC), located in the far south near Shawnessy/Sundance<br>Both centres are open 7 days per week, every day of the year, with SMCHC being open 24 hours per day and SCHC open from 8 am – 10 pm. Urgent Mental Health assistance is available at both sites from 8 am – 10 pm every day. SCHC also provides walk-in, single session counselling at no fee with variable hours during the week.',
        phone: '403-943-9300',
    }
]

const websiteResources = [
    {
        color1: 'Blue',
        name: 'Depression chat rooms',
        description: 'This website is dedicated to depression and anxiety peer support. The main forms of communication we offer are via our supportive Depression Chat Rooms, Depression Forums and our Depression Blog section.',
        link: 'http://www.depression-chat-rooms.org',
    },
    {
        color1: 'Green',
        name: 'Turn2Me.ie',
        description: 'We are a community of fully qualified and accredited mental health professionals working online to provide a high quality, safe, anonymous and confidential space for you to gain support - wherever you are, whenever you need us, for whatever you are going through.',
        link: 'https://turn2me.ie',
    },
    {
        color1: 'Yellow',
        name: 'The Good Limbo mental health community',
        description: 'The Good Limbo is an online mental health community for peer based support. We have forums and a Discord chat server where you can talk to others who understand. Whether you want to seek support, or just need a distraction, we’re here for you.',
        link: 'https://thegoodlimbo.com',
    }
]

const writtenResources = [
    {
        color1: 'Orange',
        name: 'Stress.org Blog',
        description: 'A series of blogposts about stress and stress management',
        link: 'https://www.stress.org/blog',
    },
    {
        color1: 'Red',
        name: 'CMHA blog',
        description: 'Balance is CMHA Calgary mental health blog, which aims to raise awareness, provide hope, build community and promote mental wellness through personal stories, mental health tips and information, expert opinions and community insights.',
        link: 'https://cmha.calgary.ab.ca/balance-blog/',
    }
]

const extraResources = [
    {
        color1: 'Blue',
        name: 'Superbetter',
        description: 'A website meant to gameify mental health.',
        link: 'https://www.superbetter.com',
    },
    {
        color1: 'Green',
        name: "Checkpoint's List of Games for wellbeing",
        description: 'A collection of games voted by people that have helped them with their mental wellbeing.',
        link: 'https://checkpointorg.com/games-for-health/',
    },
    {
        color1: 'Orange',
        name: 'University of Calgary Mindfulness Online',
        description: "University of Calgary's self directed mental wellness program",
        link: 'https://www.ucalgary.ca/wellness-services/staying-healthy/learning/self-help-resources/mindfulness-online',
    }
]

const allResources=[
    audioResources,
    videoResources,
    phoneResources,
    websiteResources,
    writtenResources,
    extraResources
]

let server = app.listen(8081, function () {
        let port = server.address().port;
        console.log('Server started on:' + port)
    })
    
app.get('/resources', function (req, res) {
    res.send(allResources);
})
