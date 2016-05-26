# coding:utf-8
from __future__ import unicode_literals
import logging


def dump_ltsv(dict_):
    return "\t".join("{}:{}".format(k, v) for k, v in dict_.items())


def info(msg):
    logger = logging.getLogger('file_and_console')
    logger.info(msg)


def info_dump(**dict_):
    logger = logging.getLogger('file_and_console')
    msg = dump_ltsv(dict_)
    logger.info(msg)
