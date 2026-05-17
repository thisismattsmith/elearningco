---
title: "SCORM, xAPI, and AICC: Which eLearning Standard Should You Choose?"
description: "Plain-English guide to the three eLearning standards. What each does, when to pick which, what your LMS supports. A decision framework, not a history lesson."
pubDate: 2026-05-17
author: "The eLearning Company"
category: "eLearning Best Practices"
tags: ["SCORM", "xAPI", "AICC", "cmi5", "LMS", "eLearning Standards", "Authoring Tools"]
featured: false
---

Three letter acronyms are doing a lot of work in eLearning conversations.

SCORM. xAPI. AICC. Maybe cmi5 if someone's showing off.

If you're commissioning custom eLearning for the first time, your developer will ask you what standard you need. If you don't know what they're asking, this post is for you.

If you've been around eLearning for years but never really understood why anyone would choose one standard over another, this post is also for you.

We'll keep it short. The history lesson can wait.

## What Are eLearning Standards Anyway?

Standards are how a course talks to a learning management system (LMS).

When a learner finishes module three, something has to tell the LMS "this person finished module three." When they pass the quiz with 78%, something has to tell the LMS "this person scored 78%." When the course needs to remember they were halfway through the second video and resume them there, something has to handle that handshake.

That something is the standard.

Without standards, every course would have to be custom-coded for every LMS. Standards mean a course built once can run on Cornerstone today, Workday tomorrow, and a regional government LMS the year after that.

There are three you'll hear about. One you'll almost certainly use.

## SCORM: The Default

SCORM is the dominant standard. Roughly 92% of eLearning today runs on SCORM. If you're commissioning a custom course in 2026 and the project isn't unusual, you're probably building to SCORM.

It comes in two versions you'll see in the wild:

**SCORM 1.2** is the older version, released in 2001. Despite its age, it's still the most widely supported. It handles the basics — completion tracking, time spent, pass/fail, a single score. Most modern LMSs support it.

**SCORM 2004 (latest version: 4th Edition)** is more sophisticated. It supports sequencing (forcing learners to take modules in a specific order), navigation control, and slightly richer status reporting (separating "complete" from "passed", for example).

For most projects, SCORM 1.2 is fine and usually the safer choice. SCORM 2004 makes sense if your course needs branching paths between modules, prerequisite rules, or fine-grained reporting. Your LMS administrator can tell you which version your platform supports — most support both.

What SCORM is good at: working everywhere, being well-documented, being predictable, being cheap to implement.

What SCORM is bad at: tracking learning that happens outside the LMS, supporting mobile-first or offline scenarios, capturing richer data about what learners actually did inside a course.

## xAPI: The Newer, More Powerful Option

xAPI (also called "Tin Can" in older documentation) was released in 2013 to address SCORM's limitations.

The core difference: xAPI doesn't require the learning to happen inside an LMS at all. It tracks experiences anywhere — a mobile app, a simulation, a video on your intranet, an in-person workshop, even offline activity that syncs later.

It does this by sending "statements" to something called a Learning Record Store (LRS). Each statement is structured as actor-verb-object — "Sarah completed Module 2" or "James reviewed the Q3 sales playbook" or "Priya watched 87% of the safety video."

This is more powerful than SCORM in two ways:

1. **It tracks beyond the LMS.** Mobile training, simulations, performance support tools, on-the-job activities — all trackable in one place.
2. **It captures richer data.** Not just "completed yes/no" but what they did, how long they spent on each part, what they got wrong, what they revisited.

The catch: xAPI needs more infrastructure. You need an LRS (either standalone or built into your LMS). You need someone who can interpret the data once it's collected. And not every LMS supports it as cleanly as SCORM.

When xAPI makes sense: organisations with serious learning analytics ambitions, mobile-heavy training programs, or learning that happens across multiple systems. If you're trying to answer questions like "which sales reps engage with the playbook before big deals?" or "do learners who complete the simulation perform better on the job?", xAPI gives you the data to answer them.

When xAPI is overkill: standard compliance training, one-off courses, projects where "did they finish it" is the only question you need answered.

## AICC: The Legacy Standard

AICC predates SCORM. It came out of the aviation industry in the 1980s — the Aviation Industry Computer-Based Training Committee — and was the dominant standard before SCORM took over.

Today, AICC is largely a legacy concern. Most modern LMSs still support it for backward compatibility, but very few new courses are built to it. The exceptions tend to be organisations with large existing AICC libraries they can't economically convert, or vendors with longstanding integrations they haven't migrated.

If your vendor offers you AICC as an option, ask why. There's usually a SCORM or xAPI option that's a better fit.

## cmi5: The Bridge

Worth a brief mention because you may hear about it.

cmi5 is a newer specification that uses xAPI underneath but adds structure around how courses are launched, completed, and reported on. It came from a working group that included people from the AICC side and people from the xAPI side, with the goal of giving xAPI the predictability that SCORM has while keeping its flexibility.

It's well-designed. Adoption is still building. For most projects in 2026, we'd recommend either SCORM (for simplicity) or xAPI (for richer tracking) rather than cmi5 specifically. But if you're starting fresh and want to future-proof, it's worth asking your developer whether cmi5 fits.

## The Decision Framework

Here's how we'd think about it on a project:

**Choose SCORM 1.2 if:**

- Your LMS supports it (almost all do).
- You need completion tracking, time, score, and pass/fail.
- You want the simplest, cheapest, most-compatible option.
- You don't need fine-grained data about learner behaviour.

This is the right choice for roughly 80% of custom eLearning projects.

**Choose SCORM 2004 if:**

- You need sequencing or navigation control between modules.
- You need to distinguish "completed" from "passed" in reporting.
- Your LMS administrator specifically asks for it.

This is the right choice for maybe 10–15% of projects — usually larger compliance programs or onboarding courses with multiple linked modules.

**Choose xAPI if:**

- You have serious learning analytics ambitions.
- Your training extends beyond your LMS (mobile, performance support, in-person).
- You have an LRS in place or are willing to invest in one.
- You're building something more sophisticated than a standalone course.

This is the right choice for the remaining 5–10% — and it's growing.

**Choose AICC if:**

- You have a specific legacy reason.

Almost no new project starts here.

## What We Default To

For most clients, we default to **SCORM 1.2** unless there's a specific reason to choose otherwise. It works. It's cheap. It's compatible with virtually every modern LMS. If a project needs richer tracking, we'll suggest SCORM 2004 or xAPI and explain the trade-offs.

If you're not sure what your LMS supports, the answer is almost always "SCORM 1.2, SCORM 2004, and probably xAPI." Check with your LMS administrator before signing off on a build — it's a five-minute question that prevents two weeks of rework.

## The Honest Bottom Line

eLearning standards aren't as complicated as the acronyms make them sound. Most projects need SCORM, the most widely supported version of which is also the simplest. Some projects need xAPI for richer data. A few projects have legacy reasons to need AICC.

The technical decision matters less than the decisions on either side of it: getting the learning design right, and getting the LMS integration tested before launch. Don't let standards become the part of the project that consumes the meetings.

If you want to know which standard your specific project should use, send us a brief and we'll tell you. We can build to SCORM 1.2, SCORM 2004, xAPI, or AICC depending on what your environment needs.
