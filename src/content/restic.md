---
title: Restic backup software
---

For backups of my computers, I use a piece of software called [Restic](https://restic.net/). It is a efficient and secure method that I can backup my data to various platforms including local hard drives or to the cloud. The backups are fully encrypted and only store diffs between backups so rather than storing gigabytes of data every time I send a backup, it will only upload the diff for a directory since I last ran a backup.

With such, I am paying pennies to make sure that in the case of a hard drive failure or if my computer hits the fan, my data is still recoverable. Restic can be used on Windows, Linux, and Mac for free.

![DB SVG Illustration](../images/backup-db.svg)
