# coding:utf-8
from __future__ import unicode_literals
import logging


def dump_ltsv(dict_):
    return "\t".join(
        "{}:{}".format(k, v)  for k, v
        in sorted(dict_.items(), key=lambda p: p[0])
    )


def info(msg):
    logger = logging.getLogger('file_and_console')
    logger.info(msg)


def info_dump(logtype=None, **dict_):
    logger = logging.getLogger('file_and_console')
    msg = dump_ltsv(dict_)
    if logtype is not None:
        msg = "logtype:{}\t{}".format(logtype, msg)
    logger.info(msg)
